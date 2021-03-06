import { UPDATE_BLOCK } from "./constants";
const findAnd = require("find-and");
import { v4 as uuidv4 } from "uuid";

/**
 * Define initial state for app
 */
/**
 * Blocks array describing website
 * Still expirimenting with how I want blocks
 * to be setup.
 */
let initialState = {
  blocks: [
    {
      id: uuidv4(),
      type: "section",
      tag: "section",
      classList: ["py-12", "relative"],
      data: [
        {
          id: uuidv4(),
          type: "row",
          tag: "div",
          classList: [
            "max-w-4xl",
            "mx-auto",
            "bg-blue-500",
            "flex",
            "flex-wrap",
            "py-6"
          ],
          data: [
            {
              id: uuidv4(),
              type: "column",
              tag: "div",
              classList: ["w-full", "md:w-1/2", "p-4"],
              data: [
                {
                  id: uuidv4(),
                  type: "text",
                  tag: "p",
                  classList: [
                    "text-black",
                    "text-4xl",
                    "font-semibold",
                    "leading-10",
                    "mb-2"
                  ],
                  data: "This is a website editor made with react + tailwind"
                },
                {
                  id: uuidv4(),
                  type: "text",
                  tag: "p",
                  classList: ["text-gray-800", "text-md", "leading-6", "mb-4"],
                  data:
                    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                },
                {
                  id: uuidv4(),
                  type: "link",
                  tag: "a",
                  classList: [
                    "px-4",
                    "py-2",
                    "bg-green-500",
                    "text-white",
                    "rounded",
                    "inline-block"
                  ],
                  data: {
                    target: "_self",
                    href: "#",
                    title: "Try Today"
                  }
                }
              ]
            },
            {
              id: uuidv4(),
              type: "column",
              tag: "div",
              classList: ["w-full", "md:w-1/2", "p-4"],
              data: [
                {
                  id: uuidv4(),
                  type: "image",
                  tag: "img",
                  classList: [
                    "text-black",
                    "text-3xl",
                    "text-center",
                    "bg-orange-800"
                  ],
                  data: {
                    src:
                      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    alt: "Highway Photo"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: uuidv4(),
      type: "section",
      tag: "section",
      classList: ["py-12", "relative"],
      data: [
        {
          id: uuidv4(),
          type: "row",
          tag: "div",
          classList: [
            "max-w-4xl",
            "mx-auto",
            "bg-blue-500",
            "flex",
            "flex-wrap",
            "py-6"
          ],
          data: [
            {
              id: uuidv4(),
              type: "column",
              tag: "div",
              classList: ["w-full", "md:w-1/3", "p-4"],
              data: [
                {
                  id: uuidv4(),
                  type: "image",
                  tag: "img",
                  classList: [],
                  data: {
                    alt: "image",
                    src:
                      "https://images.unsplash.com/photo-1503945839639-aea48daa250f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
                  }
                }
              ]
            },
            {
              id: uuidv4(),
              type: "column",
              tag: "div",
              classList: ["w-full", "md:w-1/3", "p-4"],
              data: [
                {
                  id: uuidv4(),
                  type: "image",
                  tag: "img",
                  classList: [],
                  data: {
                    alt: "image",
                    src:
                      "https://images.unsplash.com/photo-1505739679850-7adc7776516b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
                  }
                }
              ]
            },
            {
              id: uuidv4(),
              type: "column",
              tag: "div",
              classList: ["w-full", "md:w-1/3", "p-4"],
              data: [
                {
                  id: uuidv4(),
                  type: "image",
                  tag: "img",
                  classList: [],
                  data: {
                    alt: "image",
                    src:
                      "https://images.unsplash.com/photo-1508176850193-21de4476f385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

/**
 * Reducer for app to manage global state
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BLOCK: {
      return {
        ...state,
        blocks: findAnd.changeProps(
          state.blocks,
          { id: action.payload.id },
          { data: action.payload.data }
        )
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
