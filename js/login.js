
        function validateForm() {
            var email = document.getElementById("form2Example17").value;
            var password = document.getElementById("form2Example27").value;
            var txtpass = document.getElementById("txtpass");
            var txtemail = document.getElementById("txtemail");

            if (email === "") {
                txtemail.innerHTML = "email required";
                txtemail.className = "pt-1 pb-1 text-center text-light d-block bg-danger animate__animated animate__slideInUp";
                return false;
            } else  {
                txtemail.innerHTML = "";
                txtemail.className = "";
            }

            if (password === "") {
                txtpass.innerHTML = "Password required";
                txtpass.className = "pt-1 pb-1 text-center text-light d-block bg-danger animate__animated animate__slideInUp";

                return false;
            } else  {
                txtemail.innerHTML = "";
                txtemail.className = "";
            }

            return true; 
        }


