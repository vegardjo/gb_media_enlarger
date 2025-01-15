const { addFilter } = wp.hooks;

import alterMediaBlock from './media_enlarger';

addFilter('blocks.registerBlockType', 'utils/mediaEnlarger', alterMediaBlock)
