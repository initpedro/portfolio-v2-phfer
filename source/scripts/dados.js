export function dadosComponent() {
  return `
  <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
    <style>
      #buttonjs {
  background-color: #000000;
  color: rgba(255, 255, 255, 0.793);
  border: 0.3px solid rgba(255, 255, 255, 0.298);
  border-radius: 8px;
  padding: 1px 4px;
  font-size: 9px;
  gap: 3px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  }

  #buttonjs img {
  margin-bottom: 4px;
}

  #buttonjs p {
  margin: 4px 6px 0px 6px;
}
  
  #model-buttons {
    display: flex;
    flex-wrap: wrap; /* permite que quebrem linha em telas menores */
    justify-content: center;
    gap: 3px; /* espaço entre os botões */
    margin-bottom: 20px; /* opcional, para afastar de outros elementos */
}
    </style>
<html><div id="model-buttons">
    <div id="buttonjs"><p>PostgreSQL</p><img width="30px" src="https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000"></div>
    <div id="buttonjs"><p>MongoDB</p><img width="30px" src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"></div>
    <div id="buttonjs"><p>MySQL</p><img width="30px" src="https://img.icons8.com/?size=100&id=jYQqxG8eyJ19&format=png&color=000000"></div></div><html>
  `
}
