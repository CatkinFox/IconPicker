<?php namespace BlackFoxIT\IconPicker\FormWidgets;

use Backend\Classes\FormWidgetBase;
use File;

/**
 * FontAwesome Icon Picker Widget
 * 
 * Allows users to search and select FontAwesome icons
 */
class IconPicker extends FormWidgetBase
{
    /**
     * @var string defaultAlias for this widget
     */
    protected $defaultAlias = 'iconpicker';

    /**
     * @var array icons list loaded from JSON
     */
    protected $icons = [];

    /**
     * @inheritDoc
     */
    public function init()
    {
        $this->loadIcons();
    }

    /**
     * @inheritDoc
     */
    public function render()
    {
        $this->loadAssets();
        $this->prepareVars();
        return $this->makePartial('iconpicker');
    }

    /**
     * Prepares variables for the widget view.
     *
     * @return void
     */
    public function prepareVars()
    {
        $this->vars['name'] = $this->formField->getName();
        $this->vars['value'] = $this->getLoadValue();
        $this->vars['model'] = $this->model;
        $this->vars['icons'] = $this->icons;
    }

    /**
     * Loads FontAwesome icons from the JSON data file.
     *
     * @return void
     */
    protected function loadIcons()
    {
        $iconFile = plugins_path('blackfoxit/iconpicker/data/fontawesome-icons.json');
        
        if (File::exists($iconFile)) {
            $json = File::get($iconFile);
            $data = json_decode($json, true);
            
            if (isset($data['icons'])) {
                $this->icons = $data['icons'];
            }
        }
    }

    /**
     * @inheritDoc
     */
    public function loadAssets()
    {
        $this->addCss('/plugins/blackfoxit/iconpicker/assets/css/all.min.css');
        $this->addCss('css/iconpicker.css');
        $this->addJs('js/iconpicker.js');
    }

    /**
     * @inheritDoc
     */
    public function getSaveValue($value)
    {
        return $value ?: null;
    }
}

