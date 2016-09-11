$("#success").click(function() {
    var interpretResult = $(function() {
            var params = {
                // Request parameters
                "query": $("#query-input").val(),
                "model": "latest",
                "count": "10",
                "offset": "0",
                "timeout": "2000"
            };
            //alert($("#query-input").val())
            $.ajax({
                url: "https://api.projectoxford.ai/academic/v1.0/interpret?" + $.param(params),
                beforeSend: function(xhrObj){
                    // Request headers
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","6958f760d7074d1692f1262fa1052c7d");
                },
                type: "GET",
                // Request body
                data: "{body}",
            })
            .done(function(data) {
                //alert("success");
                var evaluateRequest = JSON.parse(data);
                var params = {
                // Request parameters
                "expr": evaluateRequest.interpretations.rules.output.value
                }
                //alert($("#query-input").val())
                $.ajax({
                    url: "https://api.projectoxford.ai/academic/v1.0/evaluate?" + $.param(params),
                    beforeSend: function(xhrObj){
                        // Request headers
                        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","6958f760d7074d1692f1262fa1052c7d");
                    },
                    type: "GET",
                    // Request body
                    data: "{body}",
                })

                .done(function(data) {
                    var evaluateResponse = JSON.parse(data);
                    alert(evaluateResponse.entities);
                });

            })
            .fail(function() {
                alert("error");
            });
    });
    
})

