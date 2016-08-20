$("#success").click(function() {
    $(function() {
            var params = {
                // Request parameters
                "query": $("#query-input").val(),
                "model": "latest",
                "count": "10",
                "offset": "0",
                "timeout": "2000"
            };
            alert($("#query-input").val())
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
                alert("success");
                alert(data)
            })
            .fail(function() {
                alert("error");
            });
    });
})

