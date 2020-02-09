const colors = {
    blue: {
        mainBackGround: "blue", 
        headerBackGround: "green",
        fontColor: "white",
        fontColor2: "black"
    },

    green: {
        mainBackGround: "green", 
        headerBackGround: "blue",
        fontColor: "white",
        fontColor2: "black"
    },

    pink: {
        mainBackGround: "pink", 
        headerBackGround: "blue",
        fontColor: "white",
        fontColor2: "black"
    },

    red: {
        mainBackGround: "red", 
        headerBackGround: "blue",
        fontColor: "white",
        fontColor2: "black"
    }
};

function createHtml(data){
    return
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/31d816cc8e.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>GitHub</title>
        <style>
           /*  styles for stuff I am missing hearder and go by classes to fill outt the rest  */
        </style>
    </head>
    <body>
        <div class="wrapper">
            <header class="header">
            <img src="#">
            <h1>HI!</h1>
            <h2>My Name is ${data.name} </h2>
            <h4> Currently @ ${data.company}</h4>
            <nav class="navBar"> 
                <a href=${data.location} Target="_blank"></a>
                <a href=${data.html_url} Target="_blank"></a>
                <a href=${data.blog} Target="_blank"></a>
            
            </nav>
            </header>

            <main class="main">
                <div class="container">
                    <div class="row">
                        <div class="col">I build things and teach people to code! </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h3>Public respo</h3>
                            <h5>${data.public_repos}</h5>
                        </div>
                        <div class="col">
                            <h3>Followers</h3>
                            <h5>${data.followers}</h5>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h3>GitHub Stars</h3>
                            <h5>${data.starred_url}</h5>
                        </div>
                        <div class="col">
                            <h3>Following</h3>
                            <h5>${data.following}</h5>
                        </div>
                </div>
                </div>
            </main>
        
        </div>


        
    </body>
    <footer class="foot"></footer>
    </html>
    `
}

module.exports = createHtml;

