// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let values = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&apos;"
    }
    Object.entries(values).map((entry) => {
      let character = entry[0];
      let html_entity = entry[1];
      if(str.includes(character)) {
        str = str.replaceAll(character, html_entity)
      }
    })
  
    return str;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));

// convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
// convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
// convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
// convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
// convertHTML("Schindler's List") should return "Schindler&apos;s List".
// convertHTML("<>") should return "&lt;&gt;".
// convertHTML("abc") should return "abc".