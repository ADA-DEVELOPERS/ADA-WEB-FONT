var svgContent = [];


$(document).ready(function() {
    
    var dropZone = $('#dropZone'),
        maxFileSize = 1000000; // максимальный размер фалйа - 1 мб.
    
    
    // Добавляем класс hover при наведении
    dropZone[0].ondragover = function() {
        dropZone.addClass('hover');
        return false;
    };
    
    // Убираем класс hover
    dropZone[0].ondragleave = function() {
        dropZone.removeClass('hover');
        return false;
    };
    
    // Обрабатываем событие Drop
    dropZone[0].ondrop = function(event) {
		
        event.preventDefault();
        dropZone.removeClass('hover');
        dropZone.addClass('drop');
        var files = event.dataTransfer.files;
		console.log(files);
        
		$("tbody.addfile").empty();
		
		var p = 0;
		for (var i = 0; f = files[i]; i++) {
			if (!f.type.match('image/svg*')) {
				continue;
			}
			svgContent[p] = files[i];
			p++;
			
			var reader = new FileReader();
			reader.onload = (function(theFile) {
				return function(e) {
					var add ='<tr name="' + escape(theFile.name) + '"><th class="svg-icon"><div class=" svg-lable">'+
							 '<img class="thumb" src="' + e.target.result + '" title="' + escape(theFile.name) + '" /></div></th>'+
							 '<td><span class="file-s">File name</span><br><span class="file-name">' + escape(theFile.name) + '</span></td>'+
							 '<td><span class="file-s">File size</span><br><span class="file-size">' + escape(theFile.size) + '</span> Kb</td>'+
							 '<td class="x-close" title="Вы точно хотите удалить иконку из списка?">'+
							 '<input type="button" class="btn btn-outline-danger" onclick="deleteSvg(\'' + escape(theFile.name) + '\')" value="Удалить"></input></tr>';
					
					$("tbody.addfile").append(add);
					
					reader.onloadend = function () {
					}
				};
			})(f);
			reader.readAsDataURL(f);
		}
    };
    
    // Показываем процент загрузки
    function uploadProgress(event) {
        var percent = parseInt(event.loaded / event.total * 100);
        dropZone.text('Загрузка: ' + percent + '%');
    }
    
    // Пост обрабочик
    function stateChange(event) {
        if (event.target.readyState == 4) {
            if (event.target.status == 200) {
                dropZone.text('Загрузка успешно завершена!');
            } else {
                dropZone.text('Произошла ошибка!');
                dropZone.addClass('error');
            }
        }
    }
});

// Добавление Файлов
function handleFileSelect(e) {
	var svgInfo = e.target.files;
	$("tbody.addfile").empty();
	var p = 0;
	for (var i = 0; f = svgInfo[i]; i++) {
		if (!f.type.match('image/svg*')) {
			continue;
		}
		svgContent[p] = svgInfo[i];
		p++;
		
		var reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				
				var add ='<tr name="' + escape(theFile.name) + '"><th class="svg-icon"><div class=" svg-lable">'+
						 '<img class="thumb" src="' + e.target.result + '" title="' + escape(theFile.name) + '" /></div></th>'+
						 '<td><span class="file-s">File name</span><br><span class="file-name">' + escape(theFile.name) + '</span></td>'+
						 '<td><span class="file-s">File size</span><br><span class="file-size">' + escape(theFile.size) + '</span> Kb</td>'+
						 '<td class="x-close" title="Вы точно хотите удалить иконку из списка?">'+
						 '<input type="button" class="btn btn-outline-danger" onclick="deleteSvg(\'' + escape(theFile.name) + '\')" value="Удалить"></input></tr>';
				
				$("tbody.addfile").append(add);
				
				reader.onloadend = function () {
				}
			};
		})(f);
		reader.readAsDataURL(f);
	}
}

// Вставить SVG в браузер
function addfileSVG() {
	let file = svgInfo[0];
	var fileReader = new FileReader();
	fileReader.onload = function(e) {
		console.log("ok");
		svgContent[index] = e.target.result;
	}
	fileReader.onloadend = function () {
		
	}
	fileReader.readAsText(file);
}

// Удалить добавленный SVG
function deleteSvg(name) {
	for(var i = 0; f = svgContent[i]; i++) {
		if(f.name == name) {
			svgContent[i] = "none";
			$("[name=\"" + name + "\"]").remove();
		}
	}
}