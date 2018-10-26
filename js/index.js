
jQuery( document ).ready(function() {

    var tiraje_amount = 1;
    var tiraje_tickets = 3;


    set_colors_clicked("#col_tiraj_"+tiraje_amount);
    set_colors_clicked("#col_ticket_"+tiraje_tickets);



    jQuery("#col_ticket_total").text(tiraje_amount);
    jQuery("#col_ticket_total").data("ticketTotal",tiraje_amount);
    total_cal();



    jQuery('.col').click(function() {


        if(jQuery(this).attr("data-num-tiraj")){


            tiraje_amount = jQuery(this).attr("data-num-tiraj");  // количество тиражей
            jQuery(this).parent().find(".col").css("background","white");
            jQuery(this).parent().find(".col").css("color","#8a8b8d");

            set_colors_clicked(this);
            jQuery("#col_ticket_total").text(tiraje_amount);
            jQuery("#ticket_amount").text(tiraje_amount);
            jQuery("#col_ticket_total").data("ticketTotal",tiraje_amount);

            total_cal();

        }


        if(jQuery(this).attr("data-num")){


          tiraje_tickets = jQuery(this).attr("data-num");  // количество билетов
            jQuery(this).parent().find(".col").css("background","white");
            jQuery(this).parent().find(".col").css("color","#8a8b8d");


            set_colors_clicked(this);
            tiraje_tickets_show(tiraje_tickets);


        }

    });

    jQuery('.generate').click(function() {



            //get random numbers

            var numbers = [];
            var ball = jQuery(this).parent().find(".ball");
            console.log(ball);

            while (numbers.length < 6) {

                var random = Math.floor(Math.random() * 49) + 1;

                if (numbers.indexOf(random) == -1) {
                    numbers.push(random);
                }
            }

            //sort numbers in array

            numbers.sort(function (a, b) {
                return a - b;
            });

            //color balls

            for (var i = 0; i < ball.length; i++) {

                ball[i].style.backgroundColor = "white";
                ball[i].style.color = "#3d3c3a";

                for (var j = 0; j < numbers.length; j++) {
                    if (numbers[j] == parseInt(ball[i].innerHTML)) {
                        ball[i].style.backgroundColor = "#8a8b8d";
                        ball[i].style.color = "white";
                    }
                }
            }

            //add numbers to history

            var history = [];
            var historyDiv = document.getElementById("history");
            var para = document.createElement("p");
            history.push(numbers.join(", "));

            for (var k in history) {

                var node = document.createTextNode(history[k]);
                para.appendChild(node);
             //   historyDiv.appendChild(para);

            }

        });

    function tiraje_tickets_show(tiraje_tickets){
        jQuery(".ticket_boxes").hide();

        for (i = 1; i <= tiraje_tickets; i++) {

        jQuery("#ticket_boxes_"+i).show();

         }
    }

    tiraje_tickets_show(tiraje_tickets);


    function total_cal(){

       var tirajTotal = jQuery("#col_tiraj_total").data("tirajTotal");
        var ticketTotal = jQuery("#col_ticket_total").data("ticketTotal");
        var ticketPrice= jQuery("#col_ticket_price").data("ticketPrice");

        console.log(tirajTotal ,ticketTotal, ticketPrice );
        var total_cal = tirajTotal*ticketTotal*ticketPrice;

        jQuery("#cal_total").text(total_cal);

        return total_cal;
    }

    function set_colors_clicked(obj){


        jQuery(obj).css("background","#8a8b8d");
        jQuery(obj).css("color","white");



    }


});