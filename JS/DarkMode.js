

    const body = document.querySelector("body"),
      qud = body.querySelector(".qud-dado"),
      br = body.getElementsByTagName(".qtd-barra"),
      tlb = body.querySelector(".tblHistorico"),
      tdV = body.querySelector(".totalDinheiro"),
      troca = body.querySelector(".troca-tema"),
      tls = body.querySelector(".lua-sol");


    troca.addEventListener("click", () =>{
        body.classList.toggle("modo-noturno");
    });

