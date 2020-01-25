"use strict";
//Kyle James
//100704048
//2020/1/24
(function(){
    /**
     * Variable initialization in this function
     * 
     */
    function Start()
    {
        console.log("%cInitializing Variables", "color: blue;");
        ChangeProductsToProjects();
        AddHumanResourcesBetweenAboutUsAndContactUs();
        AddBottomNavbar();
    }

    //changes the ptoducts tab to projects
    function ChangeProductsToProjects()
    {
        document.getElementById("products").innerHTML = "<a class=\"nav-link\" href=\"#\"><i class=\"fas fa-list\"></i> Projects</a>";
    }

    //adds a human resources tab between the about us and contact us tabs
    function AddHumanResourcesBetweenAboutUsAndContactUs() 
    {
        var HumanResourceElement = document.createElement("li");

        HumanResourceElement.innerHTML = "<a class=\"nav-link\" href=\"#\"><i class=\"fas fa-circle\"></i> Human Resources</a>";

        document.getElementById("about").parentNode.insertBefore(HumanResourceElement, document.getElementById("contact"));
    }

    //adds a navbar to the bottom of tha page
    function AddBottomNavbar() 
    {
        var footer = document.createElement("nav");
        footer.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light fixed-bottom");
        footer.innerHTML = "&copy; Kyle James 2020"

        document.getElementById("mainContent").parentNode.appendChild(footer);
    }
    
    window.addEventListener("load", Start);
})();

