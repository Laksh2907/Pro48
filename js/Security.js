class Security {

    constructor(){

        this.access1 = createButton("Variable")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.access2 = createButton("Constant")
        this.access2.position(100,120);
        this.access2.style('background', 'white');    

        this.access3 = createButton("Constructor")
        this.access3.position(100,220);
        this.access3.style('background', 'white');  

        this.access4 = createButton('Function');
        this.access4.position(100,250);
        this.access4.style('background', 'white');  

        this.access5 = createButton('Database');
        this.access5.position(100,370);
        this.access5.style('background', 'white')
        
        this.access6 = createButton('File');
        this.access6.position(100,400);
        this.access6.style('background', 'white')      

        this.access7 = createButton('Database');
        this.access7.position(100,150);
        this.access7.style('background', 'white')
        
        this.access8 = createButton('Storage');
        this.access8.position(100,280);
        this.access8.style('background', 'white')

        this.access9 = createButton('Constructor');
        this.access9.position(100,340);
        this.access9.style('background', 'white')
        
        this.access10 = createButton('Style');
        this.access10.position(670,90);
        this.access10.style('background', 'white')

        this.access11 = createButton('Class');
        this.access11.position(670,120);
        this.access11.style('background', 'white')

        this.access12 = createButton('Constructor');
        this.access12.position(670,150);
        this.access12.style('background', 'white')

        this.access13 = createButton('Never Pillated Chrome');
        this.access13.position(670,220);
        this.access13.style('background', 'white')

        this.access14 = createButton('New Person Card');
        this.access14.position(670,250);
        this.access14.style('background', 'white')

        this.access15 = createButton('Non Player Character');
        this.access15.position(670,280);
        this.access15.style('background', 'white')

        this.access16 = createButton('Constructor');
        this.access16.position(670,350);
        this.access16.style('background', 'white')

        this.access17 = createButton('Display');
        this.access17.position(670,380);
        this.access17.style('background', 'white')

        this.access18 = createButton('showSprite');
        this.access18.position(670,410);
        this.access18.style('background', 'white')
    }
    display(){

        this.access1.mousePressed(() => {
            if(this.access1.mousePressed){
                this.access1.hide();
                score++;
            }
            });

            this.access2.mousePressed(() => {
                if(this.access2.mousePressed){
                    this.access2.hide();
                    score--;
                    alert("Wrong Answer");
                }
                });
    
         this.access3.mousePressed(() => {
             if(this.access3.mousePressed){
                this.access3.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access4.mousePressed(() => {
            if(this.access4.mousePressed){
                this.access4.hide();
                score++;
            }
        });

        this.access5.mousePressed(() => {
            if(this.access5.mousePressed){
                this.access5.hide();
                score++;
            }
        });
        this.access6.mousePressed(() => {
            if(this.access6.mousePressed){
                this.access6.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access7.mousePressed(() => {
            if(this.access7.mousePressed){
                this.access7.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access8.mousePressed(() => {
            if(this.access8.mousePressed){
                this.access8.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access9.mousePressed(() => {
            if(this.access9.mousePressed){
                this.access9.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access10.mousePressed(() => {
            if(this.access10.mousePressed){
                this.access10.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access11.mousePressed(() => {
            if(this.access11.mousePressed){
                this.access11.hide();
                score++;
            }
        });
        this.access12.mousePressed(() => {
            if(this.access12.mousePressed){
                this.access12.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access13.mousePressed(() => {
            if(this.access13.mousePressed){
                this.access13.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access14.mousePressed(() => {
            if(this.access14.mousePressed){
                this.access14.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access15.mousePressed(() => {
            if(this.access15.mousePressed){
                this.access15.hide();
                score++;
            }
        });
        this.access16.mousePressed(() => {
            if(this.access16.mousePressed){
                this.access16.hide();
                score--;
                alert("Wrong Answer");
            }
        });
        this.access17.mousePressed(() => {
            if(this.access17.mousePressed){
                this.access17.hide();
                score++;
            }
        });
        this.access18.mousePressed(() => {
            if(this.access18.mousePressed){
                this.access18.hide();
                score--;
                alert("Wrong Answer");
            }
        });
if(score===6){
this.access1.hide();
this.access2.hide();
this.access3.hide();
this.access4.hide();
this.access5.hide();
this.access6.hide();
this.access7.hide();
this.access8.hide();
this.access9.hide();
this.access10.hide();
this.access11.hide();
this.access12.hide();
this.access13.hide();
this.access14.hide();
this.access15.hide();
this.access16.hide();
this.access17.hide();
this.access18.hide();

}


        
    }
}

