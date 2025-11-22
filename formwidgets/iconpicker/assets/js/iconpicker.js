/*
 * FontAwesome Icon Picker Widget
 * Uses OctoberCMS Select2 dropdown with icon enhancement
 */
(function() {
    'use strict';

    /**
     * Initialize icon picker with Select2
     */
    function initializeIconPicker(selectElement) {
        // Check if jQuery and Select2 are available (OctoberCMS uses Select2)
        if (typeof jQuery === 'undefined' || typeof jQuery.fn.select2 === 'undefined') {
            return;
        }

        var $select = jQuery(selectElement);
        
        // Check if already initialized
        if ($select.data('select2')) {
            return;
        }
        
        // Initialize Select2 with icon templates
        $select.select2({
            placeholder: $select.data('placeholder') || 'Select an icon',
            allowClear: true,
            width: '100%',
            templateResult: formatIconOption,
            templateSelection: formatIconSelection,
            escapeMarkup: function(markup) {
                return markup; // Allow HTML in results
            }
        });
        
        /**
         * Format function for dropdown options (shows icon + text)
         */
        function formatIconOption(option) {
            if (!option.id) {
                return option.text; // Return placeholder text as-is
            }
            
            var $option = jQuery(option.element);
            var iconClass = $option.data('icon') || '';
            
            if (iconClass) {
                return jQuery('<span><i class="' + iconClass + '"></i> ' + option.text + '</span>');
            }
            
            return option.text;
        }
        
        /**
         * Format function for selected value (shows icon + text)
         */
        function formatIconSelection(option) {
            if (!option.id) {
                return option.text; // Return placeholder text as-is
            }
            
            var $option = jQuery(option.element);
            var iconClass = $option.data('icon') || '';
            
            if (iconClass) {
                return jQuery('<span><i class="' + iconClass + '"></i> ' + option.text + '</span>');
            }
            
            return option.text;
        }
    }

    /**
     * Initialize all icon pickers on the page
     */
    function initializeIconPickers() {
        var selects = document.querySelectorAll('.icon-picker-select:not([data-iconpicker-initialized])');
        selects.forEach(function(select) {
            initializeIconPicker(select);
            select.setAttribute('data-iconpicker-initialized', 'true');
        });
    }

    // Wait for jQuery and Select2 to be available
    function waitForSelect2() {
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.select2 !== 'undefined') {
            // Initialize on DOM ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initializeIconPickers);
            } else {
                initializeIconPickers();
            }

            // Re-initialize when forms are loaded dynamically
            document.addEventListener('render', function() {
                setTimeout(initializeIconPickers, 100);
            });

            document.addEventListener('ajaxComplete', function() {
                setTimeout(initializeIconPickers, 100);
            });

            document.addEventListener('oc:formwidget-created', function() {
                setTimeout(initializeIconPickers, 100);
            });
        } else {
            // Retry after a short delay
            setTimeout(waitForSelect2, 100);
        }
    }

    // Start waiting for Select2
    waitForSelect2();

})();

