fetch('2016_DATA.json')
  .then(response => response.json())
  .then(data => {
    const table = createTable(data);
    const tableDiv = document.getElementById('table');
    tableDiv.appendChild(table);
  });

function createTable(data) {
  const table = document.createElement('table');

  // create header row
  const headerRow = document.createElement('tr');
  for (const key in data[0]) {
    const headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  // create data rows
  data.forEach(item => {
    const dataRow = document.createElement('tr');
    for (const key in item) {
      const dataCell = document.createElement('td');
      dataCell.textContent = item[key];
      dataRow.appendChild(dataCell);
    }
    table.appendChild(dataRow);
  });

  return table;
}
