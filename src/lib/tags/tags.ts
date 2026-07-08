export const htmlDictionary = [
  {
    section: 'Document Root & Metadata',
    tags: [
      {
        tag: 'html',
        desc: 'The top-level root element. It encloses all web content and tells browsers it is an HTML document.',
      },
      {
        tag: 'head',
        desc: 'A container for machine-readable information (metadata) about the document, such as titles, scripts, and stylesheets.',
      },
      {
        tag: 'title',
        desc: "Defines the document's title that appears in the browser tab and search engine results. Must be text-only.",
      },
      {
        tag: 'meta',
        desc: 'Defines metadata like page description, keywords, author, charset, and viewport settings for responsive design.',
      },
      {
        tag: 'link',
        desc: 'Establishes relationships between the current document and external resources. Most commonly used to link CSS stylesheets.',
      },
      {
        tag: 'style',
        desc: 'Contains internal CSS rules to style the specific document it is embedded within.',
      },
      {
        tag: 'script',
        desc: 'Embeds or references executable client-side JavaScript code to make webpages interactive.',
      },
      {
        tag: 'noscript',
        desc: 'Defines alternative fallback content to display for users who have disabled JavaScript in their browsers.',
      },
      {
        tag: 'base',
        desc: 'Specifies the base URL and target for all relative URLs contained within a document. Only one allowed per page.',
      },
    ],
  },
  {
    section: 'Sectional & Semantic Layout',
    tags: [
      {
        tag: 'body',
        desc: 'Contains all the visible content of an HTML document, including text, images, links, and layout elements.',
      },
      {
        tag: 'header',
        desc: 'Represents introductory content, typically containing a group of introductory or navigational aids like logos and titles.',
      },
      {
        tag: 'nav',
        desc: 'Represents a section of a page intended specifically for navigation links, such as main menus or tables of contents.',
      },
      {
        tag: 'main',
        desc: 'Encloses the unique, central core content of the document. Cannot contain content repeated across pages like headers and sidebars.',
      },
      {
        tag: 'article',
        desc: 'Represents a self-contained composition that is independently reusable or distributable, such as a blog post or news story.',
      },
      {
        tag: 'section',
        desc: 'Represents a generic standalone section of a document that lacks a more specific semantic element to describe it.',
      },
      {
        tag: 'aside',
        desc: 'Represents a portion of a document whose content is only indirectly related to the main content, such as sidebars or callouts.',
      },
      {
        tag: 'footer',
        desc: 'Represents a footer for its nearest section, typically containing authorship data, copyright notices, and contact links.',
      },
      {
        tag: 'address',
        desc: 'Indicates that the enclosed HTML provides contact information for a person, people, or an entire organization.',
      },
      {
        tag: 'h1',
        desc: 'Represents heading level 1, which has the highest organizational importance.',
      },
      {
        tag: 'h2',
        desc: 'Represents heading level 2, marking primary sub-sections within a document layout.',
      },
      {
        tag: 'h3',
        desc: 'Represents heading level 3, marking sub-sections nested underneath an h2 structural header.',
      },
      {
        tag: 'h4',
        desc: 'Represents heading level 4, marking fine sub-sections nested underneath an h3 structural header.',
      },
      {
        tag: 'h5',
        desc: 'Represents heading level 5, marking fine sub-sections nested underneath an h4 structural header.',
      },
      {
        tag: 'h6',
        desc: 'Represents heading level 6, which holds the lowest structural organizational heading importance.',
      },
      {
        tag: 'hgroup',
        desc: 'Groups a heading element with its associated subheadings, alternative titles, or taglines.',
      },
    ],
  },
  {
    section: 'Text Content & Grouping',
    tags: [
      {
        tag: 'p',
        desc: 'Represents a paragraph of text. Automatically creates vertical spacing blocks before and after the text structure.',
      },
      {
        tag: 'hr',
        desc: 'Represents a thematic break between paragraph-level elements. Displays as a horizontal line across the container.',
      },
      {
        tag: 'pre',
        desc: 'Represents preformatted text. Text in this element is displayed in a fixed-width font and preserves spaces and line breaks.',
      },
      {
        tag: 'blockquote',
        desc: 'Indicates that the enclosed text is an extended quotation from another external resource or person.',
      },
      {
        tag: 'ol',
        desc: 'Represents an ordered list of items, which are numbered sequentially by default.',
      },
      { tag: 'ul', desc: 'Represents an unordered list of items, which are bulleted by default.' },
      {
        tag: 'menu',
        desc: 'A semantic alternative to the unordered list, explicitly used to group interactive commands or toolbar items.',
      },
      {
        tag: 'li',
        desc: 'Represents an individual list item. Must always be contained inside a parent ordered list, unordered list, or menu.',
      },
      {
        tag: 'dl',
        desc: 'Represents a description list. Encloses pairs of terms and descriptions, such as glossaries or metadata profiles.',
      },
      {
        tag: 'dt',
        desc: 'Specifies a term in a description list. Must be contained within a description list element.',
      },
      {
        tag: 'dd',
        desc: 'Provides the description, definition, or value for the preceding term inside a description list container.',
      },
      {
        tag: 'figure',
        desc: 'Represents self-contained content, frequently with a caption, that is referenced as a single unit from the main text stream.',
      },
      {
        tag: 'figcaption',
        desc: 'Represents a caption or legend describing the rest of the contents of its parent figure element.',
      },
      {
        tag: 'div',
        desc: 'A generic block-level container for styling or layout grouping purposes. It holds no inherent semantic meaning.',
      },
    ],
  },
  {
    section: 'Inline Text Semantics',
    tags: [
      {
        tag: 'a',
        desc: 'Creates a hyperlink to web pages, files, email addresses, or locations within the same webpage via the href attribute.',
      },
      {
        tag: 'em',
        desc: 'Marks text that has stressed emphasis. Browsers typically render this text inline as italicized character layouts.',
      },
      {
        tag: 'strong',
        desc: 'Indicates that its contents have strong importance, seriousness, or urgency. Typically rendered as bold font layouts.',
      },
      {
        tag: 'small',
        desc: 'Represents side-comments and small print, like copyright or legal text. Automatically shrinks text font layout size.',
      },
      {
        tag: 's',
        desc: 'Renders text with a strikethrough line over it. Used to indicate things that are no longer relevant or accurate.',
      },
      {
        tag: 'cite',
        desc: 'Used to describe a reference to a creative work, and must include the title of that specific external work.',
      },
      {
        tag: 'q',
        desc: 'Indicates that the enclosed inline text is a short direct quotation. Browsers automatically wrap this inside quotation marks.',
      },
      {
        tag: 'dfn',
        desc: 'Used to indicate the term being defined within the context of a definition phrase or wrapping sentence structure.',
      },
      {
        tag: 'abbr',
        desc: 'Represents an abbreviation or acronym. Can use the title attribute to provide the full expansion text on mouse hover.',
      },
      {
        tag: 'ruby',
        desc: 'Used together with rt and rp to present pronunciation hints for East Asian typography characters.',
      },
      {
        tag: 'rt',
        desc: 'Provides the pronunciation or translation text characters displayed inside a ruby annotation container.',
      },
      {
        tag: 'rp',
        desc: 'Provides fallback parentheses symbols around ruby text systems for browsers lacking native ruby support.',
      },
      {
        tag: 'data',
        desc: 'Links a given piece of human-readable content with a machine-readable translation value inside the value attribute.',
      },
      {
        tag: 'time',
        desc: 'Represents a specific period in time or calendar date. Uses datetime attribute to supply machine-readable timestamps.',
      },
      {
        tag: 'code',
        desc: 'Displays a fragment of computer code. Formatted using a monospace character layout system by default.',
      },
      {
        tag: 'var',
        desc: 'Represents the name of a variable in a mathematical expression or computer programming programming string loop.',
      },
      {
        tag: 'samp',
        desc: 'Represents sample output from a computer program, script, or hardware device workflow loop console system.',
      },
      {
        tag: 'kbd',
        desc: 'Represents user keyboard input. Often styled to look like physical hardware keys on a web user interface.',
      },
      {
        tag: 'sub',
        desc: 'Specifies inline subscript text. Rendered lower and smaller than regular text, useful for chemical formulas.',
      },
      {
        tag: 'sup',
        desc: 'Specifies inline superscript text. Rendered higher and smaller than regular text, useful for mathematical exponents.',
      },
      {
        tag: 'i',
        desc: 'Represents a range of text set off from the normal text for a different readability tone (e.g., technical terms, idiomatic phrases).',
      },
      {
        tag: 'b',
        desc: 'Used to draw attention to text without conveying extra semantic importance or shifting readability intent.',
      },
      {
        tag: 'u',
        desc: 'Renders text with an unarticulated underline. Used for proper names in Chinese text or marking misspelled words.',
      },
      {
        tag: 'mark',
        desc: 'Represents text highlighted for reference purposes due to its relevance in an active search or navigation loop context.',
      },
      {
        tag: 'bdi',
        desc: 'Isolates a part of text that might be formatted in a different direction than the text surrounding it (e.g., Arabic text blocks).',
      },
      {
        tag: 'bdo',
        desc: 'Overrides the current text directionality, forcing characters to render explicitly left-to-right or right-to-left.',
      },
      {
        tag: 'span',
        desc: 'A generic inline container for styling text parts or scripts. Holds no inherent semantic value.',
      },
      {
        tag: 'br',
        desc: 'Produces a line break in text. Useful for writing poems or physical street address display configurations.',
      },
      {
        tag: 'wbr',
        desc: 'Word Break Opportunity. Specifies where in a long string of text a browser is allowed to create a line break if needed.',
      },
    ],
  },
  {
    section: 'Multimedia & Embedded Content',
    tags: [
      {
        tag: 'img',
        desc: 'Embeds a visual image file into the webpage layout. Requires src and alt attributes to function correctly.',
      },
      {
        tag: 'iframe',
        desc: 'Represents a nested browsing context, effectively embedding another complete HTML webpage inside the current layout container.',
      },
      {
        tag: 'embed',
        desc: 'Provides an integration point for an external resource, typically non-HTML interactive apps or third-party plugin content.',
      },
      {
        tag: 'object',
        desc: 'Introduces an external resource container that can be treated as an image, a nested browser environment, or plugin target.',
      },
      {
        tag: 'video',
        desc: 'Embeds media video playback engines natively onto a web application layout without relying on external web plugins.',
      },
      {
        tag: 'audio',
        desc: 'Embeds sound media playback workflows natively onto the web document layout structure.',
      },
      {
        tag: 'source',
        desc: 'Specifies alternative multiple media asset file streams for video, audio, or picture layout selections.',
      },
      {
        tag: 'track',
        desc: 'Used as a child element inside audio or video elements to link timed text file streams like subtitle translations.',
      },
      {
        tag: 'picture',
        desc: 'Provides a wrapper to list multiple image source formats, allowing browsers to pick the most responsive layout size asset.',
      },
      {
        tag: 'portal',
        desc: 'Enables embedding another HTML page for seamless, animated screen transition navigation loops.',
      },
      {
        tag: 'canvas',
        desc: 'Provides a scriptable resolution-dependent bitmap canvas zone used for rendering real-time scripts, animations, or UI graphics.',
      },
      {
        tag: 'svg',
        desc: 'Container element used to render modular, vector-based geometric scalable graphics safely inside the layout DOM.',
      },
      {
        tag: 'math',
        desc: 'The root element for MathML structures, enabling semantic rendering of complex scientific mathematical expressions.',
      },
    ],
  },
  {
    section: 'Tabular Data',
    tags: [
      {
        tag: 'table',
        desc: 'The semantic container used to display structural multi-dimensional tabular data fields across grid rows and data columns.',
      },
      {
        tag: 'caption',
        desc: 'Defines the description title text label for its parent table element. Must be placed immediately after table start tag.',
      },
      {
        tag: 'colgroup',
        desc: 'Defines a structured group of one or more columns within a table to apply shared processing styles efficiently.',
      },
      {
        tag: 'col',
        desc: 'Defines a singular column column node inside a colgroup to map explicit cell behavior properties across table structures.',
      },
      {
        tag: 'thead',
        desc: 'Groups the heading row components of a table, defining the primary column definitions for data interpretation blocks.',
      },
      {
        tag: 'tbody',
        desc: 'Encapsulates the core collection of table rows that contain the primary body data fields of the tabular layout.',
      },
      {
        tag: 'tfoot',
        desc: 'Groups summary data block rows located at the absolute base of a structured table grid layout layout component.',
      },
      {
        tag: 'tr',
        desc: 'Defines a horizontal row of cells inside a structured table grid container element.',
      },
      {
        tag: 'th',
        desc: 'Defines a specific header cell for a table row or column, rendering text bold and centered by default styling configurations.',
      },
      {
        tag: 'td',
        desc: 'Defines a standard data cell component within a table row, holding the primary string or numeric node layout values.',
      },
    ],
  },
  {
    section: 'Forms & User Interactive Controls',
    tags: [
      {
        tag: 'form',
        desc: 'Represents a document section containing interactive controls to submit complex data payloads across network architectures.',
      },
      {
        tag: 'label',
        desc: 'Provides a caption text string explicitly linked to a target form input node to maximize UI accessibility profiles.',
      },
      {
        tag: 'input',
        desc: 'A powerful multi-purpose interactive field used to accept data inputs depending on its type attribute (e.g., text, checkbox, date).',
      },
      {
        tag: 'button',
        desc: 'An interactive clickable element that triggers a standard form submission or fires script functions when activated.',
      },
      {
        tag: 'select',
        desc: 'Renders a drop-down menu control option collection for user option selection flows.',
      },
      {
        tag: 'datalist',
        desc: 'Contains a set of option components that provide a list of recommended autocomplete suggestions for an input field.',
      },
      {
        tag: 'optgroup',
        desc: 'Creates grouped heading labels inside a drop-down select element to organize lengthy data sets visually.',
      },
      {
        tag: 'option',
        desc: 'Defines an individual choice item nested within a select container or a datalist collection block.',
      },
      {
        tag: 'textarea',
        desc: 'Renders a multi-line plain text editing box for long form string text content entry fields.',
      },
      {
        tag: 'fieldset',
        desc: 'Groups several related interactive inputs and controls together within a web form layout framework.',
      },
      {
        tag: 'legend',
        desc: 'Defines a clear, descriptive caption title for its parent fieldset group component.',
      },
      {
        tag: 'progress',
        desc: 'Renders an indicator bar visualizing the completion progress status of an active computer background system task.',
      },
      {
        tag: 'meter',
        desc: 'Represents a scalar measurement within a known range or a fractional value (e.g., hard drive disk usage bar indicator).',
      },
      {
        tag: 'output',
        desc: 'A container element inject point used to display the text feedback results of an application calculation workflow loop.',
      },
      {
        tag: 'details',
        desc: 'Creates a disclosure toggle widget that reveals hidden descriptive content when expanded by a user click.',
      },
      {
        tag: 'summary',
        desc: 'Specifies the visible heading text string label for its parent details disclosure widget component.',
      },
      {
        tag: 'dialog',
        desc: 'Represents an interactive dialog box popup or overlay element, such as a modal window system asset.',
      },
    ],
  },
  {
    section: 'Web Components & Document Edits',
    tags: [
      {
        tag: 'template',
        desc: 'Holds client-side HTML markup templates that are completely hidden from render until cloned and activated via scripts.',
      },
      {
        tag: 'slot',
        desc: 'A placeholder anchor node inside a shadow DOM web component template to insert custom markup children layouts.',
      },
      {
        tag: 'ins',
        desc: 'Represents a block of text markup that has been freshly added to the document tracking stream history profile.',
      },
      {
        tag: 'del',
        desc: 'Represents a section of text that has been explicitly removed or struck from the source content layout stream.',
      },
    ],
  },
]
