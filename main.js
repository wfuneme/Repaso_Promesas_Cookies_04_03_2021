window.onload = function(){
    const data = {mes : 3, dia : 4, ano : 2022, hora : 0, min : 1, seg : 10 };
    
    const Cookie = new Object({
        date : new Date(),
        limite: function(data){
            const expire = this.expire();
            expire[1] = this.Dia(data.dia);
            expire[2] = this.Mes(data.mes);
            expire[3] = this.Ano(data.ano);
            expire[4][0] = this.Hor(data.hora);
            expire[4][1] = this.Min(data.min);
            expire[4][2] = this.Seg(data.seg);
            expire[4] = expire[4].join(":");
            return expire.join(" ");
        },
        expire: function(){
            const cadena = this.date.toGMTString().split(" ");
            cadena[4] = cadena[4].split(":");
            return cadena;
        },
        Sem : function(){
            const semana = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            return semana[this.date.getDay()];//
        },
        Mes : function(id){
            const mes = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            return (mes.hasOwnProperty(id-1)) ? mes[id-1] : mes[this.date.getMonth()];
        },
        Dia : function(id){
            const dia = this.date.getMonth();
            const calendario = new Date(this.Ano(), (dia+1<=12 && dia+1>=1) ? dia+1 : dia-1, 0);
            return (id<=calendario.getDate()) ? (id>=this.date.getDay()) ? "0"+id : this.date.getDay() : this.date.getDay();
        },
        Ano : function(id=0){
            return (id>=this.date.getFullYear()) ? id : this.date.getFullYear();
        },
        Hor : function(id){
            const hora = this.expire()[4][0];
            const suma = ""+(parseInt(hora)+id);
            return (suma<=23) ? (suma.length!=1) ? suma : "0"+suma : hora;
        },
        Min : function(id){
            const min = this.expire()[4][1];
            const suma = ""+(parseInt(min)+id);
            return (suma<=59) ? (suma.length!=1) ? suma : "0"+suma : min;
        },
        Seg : function(id){
            const seg = this.expire()[4][2];
            const suma = ""+(parseInt(seg)+id);
            return (suma<=59) ? (suma.length!=1) ? suma : "0"+suma : seg;
        }
    });
    console.log(Cookie.limite(data));
    document.cookie = "Nombre=Willmer_Obed; expires="+Cookie.limite(data)+";";
    var date = new Date();
    let cadena = date.toGMTString();
    console.log(cadena);

    // Cookie.limite.call(expire).then(res=>{
    //     console.log(res);
    // })


}