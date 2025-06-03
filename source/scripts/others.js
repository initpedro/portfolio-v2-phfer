export function othersComponent() {
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
    <div id="buttonjs"><p>Git</p><img width="30px" src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"></div>
    <div id="buttonjs"><p>Github</p><img width="30px" src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"></div>
    <div id="buttonjs"><p>Figma</p><img width="30px" src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"></div>
    <div id="buttonjs"><p>Docker</p><img width="30px" src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"></div>
    <div id="buttonjs"><p>Trello</p><img width="30px" src="https://img.icons8.com/?size=100&id=21049&format=png&color=000000"></div>
    <div id="buttonjs"><p>REST APIs</p><img width="30px" src="https://img.icons8.com/?size=100&id=55497&format=png&color=000000"></div>
    <div id="buttonjs"><p>ChatGPT</p><img width="30px" src="https://img.icons8.com/?size=100&id=ka3InxFU3QZa&format=png&color=000000"></div>
    <div id="buttonjs"><p>VSCode</p><img width="30px" src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000"></div>
    <div id="buttonjs"><p>Vercel</p><img width="30px" src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png"></div>
    <div id="buttonjs"><p>VS</p><img width="30px" src="https://img.icons8.com/?size=100&id=y7WGoWNuIWac&format=png&color=000000"></div>
    <div id="buttonjs"><p>UI/UX</p><img width="30px" src="https://img.icons8.com/?size=100&id=122219&format=png&color=ffffff"></div></div><html>
  `
}
