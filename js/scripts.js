let sizes = [4, 8, 15, 16, 23, 42];

d3.selectAll('.paragraph')
    .data(sizes)
    .style("font-size", (size) => `${size}px`);


d3.select('noParagraphsPresent') // met #noPragraphsPresent wordt het eerste item in drray overgeslagen?
    .data(sizes)
    .enter()
    .append('p')
    .text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit debitis expedita explicabo doloremque animi, quisquam obcaecati ipsum nobis in.')
    .style('font-size', (size) => `${size}px`)