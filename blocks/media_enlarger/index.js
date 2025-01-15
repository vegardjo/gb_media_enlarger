import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * When this function gets run by the addfilter
 * hook below, the filter passes it the block settings
 * or config file.
 */
const alterMediaBlock = (settings, name) => {

  if (name !== 'drupalmedia/drupal-media-entity') {
    return settings;
  }

  // Extend block attributes.
  settings.attributes = {
    ...settings.attributes,
    isExpandable: {
      type: 'boolean',
      default: false,  // Set the default value
    },
  };

  const newEdit = (props) => {
    const { attributes, setAttributes } = props;

    // Local state to manage the toggle button
    const [isExpandable, setIsExpandable] = useState(attributes.isExpandable || false);

    const toggleButton = () => {
      const newValue = !isExpandable;
      setIsExpandable(newValue);
      setAttributes({ isExpandable: newValue });
      setAttributes({lockViewMode: true});
    };

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Media Settings">
            <ToggleControl
              label="Expandable image"
              help="Tick to show a larger version of the image on click"
              checked={isExpandable}
              onChange={toggleButton}
            />
          </PanelBody>
        </InspectorControls>

        {/* Render the original edit component */}
        {settings.edit(props)}
      </Fragment>
    );
  };

  return {
    ...settings,
    edit: newEdit,
  };
};

export default alterMediaBlock;
