// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  

  // UPDATE  
    const submitBtn = document.getElementById("form");
    const devourBtn = document.querySelectorAll(".devourBtn");

  // Set up the event listener for the submit btn
    if (submitBtn) {
      submitBtn.addEventListener("submit", (e) => {
        e.preventDefault();
        const BurgerName = document.getElementById("burger").value.trim();
        const newBurger = {
          burgerName: BurgerName,
        };
  
        fetch("/api/burgers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          // make sure to serialize the JSON body          
          body: JSON.stringify(newBurger),

        }).then(() => {
          document.getElementById("burger").value = "";
          location.reload();
        });
      });
    }

  // Devoru Btn
    if (devourBtn) {
      devourBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = e.target.getAttribute("data-id");
  
          const devouredBurger = {
            id: id,
          };

          fetch(`/api/burgers/${id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(devouredBurger),
          }).then(() => {
            location.reload("/");
          });
        });
      });
    }
  });