//grab the list of children that live at the first ul node

document[0];
// would return the first whole object.
//=> {
/*
  tagName: "div",
  children: [
    {
      tagName: "ul",
      children: [
        {tagName: "li", value: "list item 1"},
        {tagName: "li", value: "list item 2"},
        {tagName: "li", value: "list item 3"}
      ]
    }
  ]
},
{
  tagName: "div",
  children: [
    {
      tagName: "form",
      children: [
        {
          tagName: "input",
          type: "text",
          value: "name"
        },
        {
          tagName: "input",
          type: "submit"
        }
      ]
    }
  ]
},*/
document[0].children;
// would return the array under the children key
/*

children: [
  {
    tagName: "ul",
    children: [
      {tagName: "li", value: "list item 1"},
      {tagName: "li", value: "list item 2"},
      {tagName: "li", value: "list item 3"}
    ]
  }
]
},*/

document[0].children[0].children;
//=>
/*
{tagName: "li", value: "list item 1"},
{tagName: "li", value: "list item 2"},
{tagName: "li", value: "list item 3"}
*/
var document = [
  {
    tagName: "div",
    children: [
      {
        tagName: "ul",
        children: [
          {tagName: "li", value: "list item 1"},
          {tagName: "li", value: "list item 2"},
          {tagName: "li", value: "list item 3"}
        ]
      }
    ]
  },
  {
    tagName: "div",
    children: [
      {
        tagName: "form",
        children: [
          {
            tagName: "input",
            type: "text",
            value: "name"
          },
          {
            tagName: "input",
            type: "submit"
          }
        ]
      }
    ]
  },
  {
    tagName: "div",
    children: [
      {
        tagName: "p",
        value: "I'm a paragraph"
      }
    ]
  }
]
