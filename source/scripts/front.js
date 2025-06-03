export function frontComponent() {
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
    <div id="buttonjs"><p>JavaScript</p><img width="30px" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"></div>
    <div id="buttonjs"><p>TypeScript</p><img width="30px" src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"></div>
    <div id="buttonjs"><p>React</p><img width="30px" src="https://img.icons8.com/?size=100&id=122637&format=png&color=ffffff"></div>
    <div id="buttonjs"><p>Next.js</p><img width="30px" src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=8F8484"></div>
    <div id="buttonjs"><p>TailwindCSS</p><img width="30px" src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=019AFC"></div>
    <div id="buttonjs"><p>Sass</p><img width="30px" src="https://img.icons8.com/?size=100&id=78Fr72VCwbPq&format=png&color=000000"></div>
    <div id="buttonjs"><p>HTML</p><img width="30px" src="https://img.icons8.com/?size=100&id=20909&format=png&color=E65100"></div>
    <div id="buttonjs"><p>CSS</p><img width="30px" src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"></div></div><html>
  `
}
