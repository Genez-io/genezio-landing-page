
const content = `
{{< external-link link="https://www.taskade.com/automate/categories" >}}Taskade{{< /external-link >}}
{{< external-link link="https://genezio.com/#cta-buttons" >}}Start testing for free{{< /external-link >}}
Some text here.
`;

const regex = /{{<\s*external-link\s+link="([^"]+)"\s*>}}(.*?){{<\s*\/external-link\s*>}}/g;

const replaced = content.replace(regex, "[$2]($1)");

console.log("Original:");
console.log(content);
console.log("\nReplaced:");
console.log(replaced);
