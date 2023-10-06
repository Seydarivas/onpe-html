const getTotal = async () => {
  const data = await fetch(
    "https://oaemdl.es/onpe_sweb_php/participacion/Nacional"
  );
  if ((data.status = 200)) {
    const total = await data.json();
    let html = `
            <tr class="titulo_tabla">
              <td>DEPARTAMENTO</td>
              <td>TOTAL ASISTENTES</td>
              <td>% TOTAL ASISTENTES</td>
              <td>TOTAL AUSENTES</td>
              <td>% TOTAL AUSENTES</td>
              <td>ELECTORES HÁBILES</td>
            </tr>


        `;
    total.forEach((total) => {
      html += `
                <tr onclick="total.html?id=${total.nacional}" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
                  <td>${total.DPD}</td>
                  <td>${total.TV}</td>
                  <td>${total.PTV}</td>
                  <td>${total.TA}</td>
                  <td>${total.PTA}</td>
                  <td>${total.EH}</td>
                </tr>
                <tr>
            `;
    });

    html += `
        <tr>
        <td>TOTALES</td>
        <td>17,953,367</td>
        <td>81.543%</td>
        <td>4,063,663</td>
        <td>18.457%</td>
        <td>22,017,030</td>
      </tr>
        `;

    document.getElementById("resultados").innerHTML = html;
  }
};

getTotal();

/* <div class="col-xs-12">
                  <p class="subtitle">Consulta de participación DETALLADO </p>
                  <div id="page-wrap">
                    <table class="table21">
                      <tbody id="resultados">
                        <tr class="titulo_tabla">
                          <td>DEPARTAMENTO</td>
                          <td>TOTAL ASISTENTES</td>
                          <td>% TOTAL ASISTENTES</td>
                          <td>TOTAL AUSENTES</td>
                          <td>% TOTAL AUSENTES</td>
                          <td>ELECTORES HÁBILES</td>
                        </tr>
                        <tr onclick="location.href='./participacion_total.html?id=nacional,AMAZONAS'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
                          <td>AMAZONAS</td>
                          <td>182,570</td>
                          <td>67.575%</td>
                          <td>87,605</td>
                          <td>32.425%</td>
                          <td>270,175</td>
                        </tr>
                        <tr>
                          <td>TOTALES</td>
                          <td>17,953,367</td>
                          <td>81.543%</td>
                          <td>4,063,663</td>
                          <td>18.457%</td>
                          <td>22,017,030</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
                */
