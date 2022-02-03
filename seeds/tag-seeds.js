const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'A',
  },
  {
    tag_name: 'B',
  },
  {
    tag_name: 'C',
  },
  {
    tag_name: 'D',
  },
  {
    tag_name: 'E',
  },
  {
    tag_name: 'F',
  },
  {
    tag_name: 'G',
  },
  {
    tag_name: 'H',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
