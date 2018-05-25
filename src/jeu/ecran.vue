<template>
    <div class="Plateau" v-bind:style="{'text-align':'  center'}" >
        <div class='temps'>
            <p v-if="etat == 'stopped'"><button class="button" @click="launchtimer">Démarrer</button></p>
            <p v-else>Temps écoulé : {{timer}}.{{textmill}}</p>
        </div>
         <div v-show="over==true" class='gameover'>
             
            <p>GAME OVER !</p>
        </div>
        <div :class="['gamearea'+etat]">
            <div v-for="(horizon,index) in grille.squares" v-bind:key="index" :index="index">
                <span display: inline v-for="(vertic,index) in horizon" v-bind:key="index" :index="index">
                    <span :class="['case-'+vertic]">
                        {{vertic}}
                    </span>
                </span>
            </div>
        </div>

    </div>
</template>

<script>
import Board from '@/scripts/Board.js' 
import design from '@/scripts/design.css'

export default {
  name: 'Ecran',
    created(){
        Board.init(4)
        this.grille = Board
        console.log(Board)
        console.log(this.grille)
    },
    data () {
        return {
            grille:'',
            cases:'',
            timer:0,
            timermill:0,
            textmill:'',
            etat:'stopped',
            over:'false'
        }
    },
    methods: {
        touche: function(){
        var self = this;
        self.over=false;
        window.addEventListener("keydown", function(e) {
            if(self.etat=='launched'){
                switch(e.keyCode){
                    case 38:
                        Board.move ('left')
                        break;
                    case 37:
                        Board.move ('up')
                        break;
                    case 39:
                        Board.move ('down')
                        break;
                    case 40:
                        Board.move ('right')
                        break;
                    }
                // console.log(Board.squares)
                
                

                self.over=Board.over;
                if(self.over==true){
                   console.log(self.over) 
                   self.etat='stopped'
                }
                self.$forceUpdate()
                }
            }
        )},

        temps: function(){
            this.timer = this.timer+1;
            console.log(this.timer);
        },

        tempsmill: function(){
            this.timermill = this.timermill+1;
            this.textmill = this.timermill;
            if(this.timermill>0 && this.timermill<10){
                this.textmill = '0'+this.timermill;
            }
            if(this.timermill >= 100){
                this.textmill=0
                this.timermill=0;
            }
        },
        launchtimer: function(){
            
            this.etat='launched';
            setInterval(this.temps,1000);
            setInterval(this.tempsmill,10);
            console.log(this.etat);
        }
    },
    mounted() {
        this.touche()
  }

}
</script>