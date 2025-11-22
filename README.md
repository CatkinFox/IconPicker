# BlackFox IT Icon Picker

A FontAwesome icon picker form widget for OctoberCMS that allows users to search and select FontAwesome icons in backend forms.

## Features

- Searchable dropdown with 200+ FontAwesome icons
- Icon preview in both dropdown and selected value
- Uses OctoberCMS native Select2 dropdown
- Fully integrated with OctoberCMS backend styling
- Works standalone - includes FontAwesome assets locally (no CDN required)

## Installation

1. Copy the plugin to `plugins/blackfoxit/iconpicker/`
2. The plugin will be automatically detected by OctoberCMS

## Usage

In your Tailor blueprint or form YAML:

```yaml
icon:
    label: Icon
    type: iconpicker
    comment: Select a FontAwesome icon
```

## FontAwesome Assets

The plugin includes FontAwesome 5.15.4 assets (CSS and fonts) locally, so no external CDN or additional installation is required. All assets are bundled within the plugin directory.

## Requirements

- OctoberCMS v4
- jQuery and Select2 (included with OctoberCMS)

## License

This plugin is licensed under the MIT License.

### FontAwesome License

This plugin includes FontAwesome Free 5.15.4, which is licensed under:
- **Icons**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Fonts**: [SIL OFL 1.1](https://scripts.sil.org/OFL)
- **Code**: [MIT License](https://opensource.org/licenses/MIT)

The FontAwesome license header is preserved in the CSS file as required by the license terms.

