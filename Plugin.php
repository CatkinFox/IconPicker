<?php namespace BlackFoxIT\IconPicker;

use System\Classes\PluginBase;

/**
 * IconPicker Plugin Information File
 * 
 * Provides a FontAwesome icon picker form widget for OctoberCMS
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'BlackFox IT Icon Picker',
            'description' => 'FontAwesome icon picker form widget for OctoberCMS',
            'author'      => 'BlackFox IT',
            'icon'        => 'icon-font'
            // 'homepage'    => 'https://...' // Optional: Add homepage URL
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {
        // Future registrations (like console commands) can go here
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return void
     */
    public function boot()
    {
        // Code to run on plugin boot
    }

    /**
     * Registers any form widgets implemented in this plugin.
     *
     * @return array
     */
    public function registerFormWidgets()
    {
        return [
            FormWidgets\IconPicker::class => 'iconpicker',
        ];
    }
}
