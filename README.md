# BlackFox IT Icon Picker

A powerful FontAwesome icon picker form widget for OctoberCMS that makes it easy to select and use FontAwesome icons in your backend forms and Tailor blueprints.

## Features

* **Searchable Dropdown**: Quickly find icons with a searchable dropdown interface
* **Visual Icon Preview**: See icons displayed in both the dropdown and selected value
* **989 FontAwesome Icons**: Includes a comprehensive selection of FontAwesome 5 icons (Solid, Regular, and Brand styles)
* **Native OctoberCMS Integration**: Uses standard HTML select elements with vanilla JavaScript - no dependencies
* **Self-Contained**: Includes all FontAwesome assets - no external dependencies or CDN required
* **Tailor Compatible**: Works seamlessly with Tailor CMS blueprints
* **Easy to Use**: Simple YAML configuration - just specify `type: iconpicker`

## Usage

In your Tailor blueprint or form YAML:

```yaml
icon:
    label: Icon
    type: iconpicker
    comment: Select a FontAwesome icon
```

## FontAwesome Assets

The plugin includes FontAwesome 5.15.4 assets (CSS and fonts) locally, so no external CDN or additional installation is required. All assets are bundled within the plugin directory!

## Requirements

- OctoberCMS v4
- No additional dependencies required

## License

This plugin is licensed under the GPL-3.0 License.

### FontAwesome License

This plugin includes FontAwesome Free 5.15.4, which is licensed under:

- **Icons**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Fonts**: [SIL OFL 1.1](https://scripts.sil.org/OFL)
