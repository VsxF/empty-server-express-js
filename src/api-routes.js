module.exports = function(app) {

    app.get("/ola", async (req, res) => {
        //Insert imported functions?
        res.send("sss ola?");
    });
}