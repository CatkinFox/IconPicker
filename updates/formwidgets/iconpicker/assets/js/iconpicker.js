/**
 * FontAwesome Icon Picker Widget
 * 
 * Enhances OctoberCMS Select2 dropdowns to display FontAwesome icons
 * in both the selected value and dropdown options.
 */
(function() {
    'use strict';

    /**
     * Enhances a Select2 dropdown element to display icons.
     *
     * @param {HTMLElement} selectElement The select element to enhance
     */
    function enhanceSelect2WithIcons(selectElement) {
        if (selectElement.dataset.iconPickerEnhanced) {
            return;
        }
        
        function waitForSelect2() {
            var select2Container = document.querySelector('.select2-container--' + selectElement.id);
            
            if (select2Container || selectElement.classList.contains('select2-hidden-accessible')) {
                enhanceSelect2Display(selectElement);
                selectElement.dataset.iconPickerEnhanced = 'true';
            } else {
                setTimeout(waitForSelect2, 50);
            }
        }
        
        waitForSelect2();
    }
    
    /**
     * Enhances the Select2 rendered display element to show icons.
     *
     * @param {HTMLElement} selectElement The select element
     */
    function enhanceSelect2Display(selectElement) {
        var containerId = 'select2-' + selectElement.id + '-container';
        var renderedElement = document.getElementById(containerId);
        
        if (!renderedElement) {
            return;
        }
        
        /**
         * Updates the rendered display to show the selected icon.
         */
        function updateRenderedDisplay() {
            var selectedOption = selectElement.options[selectElement.selectedIndex];
            var existingIcon = renderedElement.querySelector('i');
            
            if (selectedOption && selectedOption.value) {
                var iconClass = selectedOption.getAttribute('data-icon');
                
                if (iconClass) {
                    if (!existingIcon) {
                        var icon = document.createElement('i');
                        icon.className = iconClass;
                        icon.style.marginRight = '8px';
                        renderedElement.insertBefore(icon, renderedElement.firstChild);
                    } else {
                        existingIcon.className = iconClass;
                    }
                } else if (existingIcon) {
                    existingIcon.remove();
                }
            } else if (existingIcon) {
                existingIcon.remove();
            }
        }
        
        selectElement.addEventListener('change', updateRenderedDisplay);
        selectElement.addEventListener('select2:open', updateRenderedDisplay);
        selectElement.addEventListener('select2:close', updateRenderedDisplay);
        
        updateRenderedDisplay();
        enhanceSelect2Options(selectElement);
    }
    
    /**
     * Enhances Select2 dropdown options to display icons.
     *
     * @param {HTMLElement} selectElement The select element
     */
    function enhanceSelect2Options(selectElement) {
        var observer = new MutationObserver(function(mutations) {
            var resultsContainer = document.querySelector('.select2-results');
            if (resultsContainer) {
                var options = resultsContainer.querySelectorAll('.select2-results__option');
                options.forEach(function(option) {
                    var optionId = option.id.replace('select2-', '').replace('-result-', '-option-');
                    var originalOption = document.getElementById(optionId);
                    
                    if (!originalOption) {
                        var optionValue = option.getAttribute('data-selected') || option.textContent.trim();
                        originalOption = selectElement.querySelector('option[value="' + optionValue + '"]');
                    }
                    
                    if (originalOption) {
                        var iconClass = originalOption.getAttribute('data-icon');
                        if (iconClass) {
                            var existingIcon = option.querySelector('i');
                            if (!existingIcon) {
                                var icon = document.createElement('i');
                                icon.className = iconClass;
                                icon.style.marginRight = '8px';
                                option.insertBefore(icon, option.firstChild);
                            } else {
                                existingIcon.className = iconClass;
                            }
                        }
                    }
                });
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Initializes all icon picker widgets on the page.
     */
    function initializeIconPickers() {
        var selects = document.querySelectorAll('.icon-picker-select:not([data-icon-picker-enhanced])');
        selects.forEach(function(select) {
            enhanceSelect2WithIcons(select);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeIconPickers);
    } else {
        initializeIconPickers();
    }

    document.addEventListener('render', function() {
        setTimeout(initializeIconPickers, 200);
    });

    document.addEventListener('ajaxComplete', function() {
        setTimeout(initializeIconPickers, 200);
    });

    document.addEventListener('oc:formwidget-created', function() {
        setTimeout(initializeIconPickers, 200);
    });

})();
