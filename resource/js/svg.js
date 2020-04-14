var svgContent = [];
var svgText = [];
var index = 0;
var colorElement = ["#a96c6c", "#75a96c", "#6ca9a1", "#6c79a9", "#896ca9", "#a96c8e", "#a98e6c", "#6ca982", "#6c9ea9", "#736ca9", "#976ca9", "#a96c7d", "#a9a46c", "#8fa96c", "#6ca992", "#6c84a9", "#7e6ca9", "#a86ca9", "#7b5151", "#7b7451", "#677b51", "#517b58", "#517b73", "#516a7b", "#54517b", "#6d517b", "#7b6251", "#787b51", "#5d7b51", "#517b60", "#517b7b", "#51647b", "#5d517b", "#76517b", "#7b6c51", "#6f7b51", "#527b51", "#517b6a", "#51737b", "#51587b", "#65517b", "#7b5178"];



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
        
		$("tbody.addfile").empty();
		$(".addfile button").remove();
		svgContent = [];
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
						var btm = '<button type="button" onclick="EditSvg()" class="btn btn-outline-danger btn-block">Продолжить</button>'
						$("div.addfile").append(btm);
					}
				};
			})(f);
			reader.readAsDataURL(f);
			
			
			var fileReader = new FileReader();
			fileReader.onload = function(e) {
				
				svgText[index] = e.target.result;
				index++
			}
			fileReader.onloadend = function () {
			}
			fileReader.readAsText(f);
			
			
		}
    };
    
 
});

// Добавление Файлов
function handleFileSelect(e) {
	var svgInfo = e.target.files;
	$("tbody.addfile").empty();
	$(".addfile button").remove();
	svgContent = [];
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
				//console.log("add");
				var add ='<tr name="' + escape(theFile.name) + '"><th class="svg-icon"><div class=" svg-lable">'+
						 '<img class="thumb" src="' + e.target.result + '" title="' + escape(theFile.name) + '" /></div></th>'+
						 '<td><span class="file-s">File name</span><br><span class="file-name">' + escape(theFile.name) + '</span></td>'+
						 '<td><span class="file-s">File size</span><br><span class="file-size">' + escape(theFile.size) + '</span> Kb</td>'+
						 '<td class="x-close" title="Вы точно хотите удалить иконку из списка?">'+
						 '<input type="button" class="btn btn-outline-danger" onclick="deleteSvg(\'' + escape(theFile.name) + '\')" value="Удалить"></input></tr>';
				
				$("tbody.addfile").append(add);
				
				reader.onloadend = function () {
					var btm = '<button type="button" onclick="EditSvg()" class="btn btn-outline-danger btn-block">Продолжить</button>'
					$("div.addfile").append(btm);
				}
			};
		})(f);
		reader.readAsDataURL(f);
		
		
		
		
		var fileReader = new FileReader();
		fileReader.onload = function(e) {
			
			svgText[index] = e.target.result;
			index++
		}
		fileReader.onloadend = function () {
		}
		fileReader.readAsText(f);
		
		
		
		
		
		
		
	}
}

// Вставить SVG в браузер
function addfileSVG(f) {
	let file = f;
	var fileReader = new FileReader();
	fileReader.onload = function(e) {
		return e.target.result;
	}
	fileReader.onloadend = function () {
		
	}
	fileReader.readAsText(file);
}





// Удалить добавленный SVG
function deleteSvg(name) {
	for(var i = 0; f = svgContent[i]; i++) {
		console.log(f.name);
		if(f.name == name) {
			svgContent.splice(i, 1);
			$("[name=\"" + name + "\"]").remove();
			if(svgContent.length <= 0) {
				$(".addfile button").remove();
			}
			
		}
	}
}




function EditSvg() {
	$("div.select-file").empty();
	$(".addfile button").remove();
	$("#dropZone").hide();
	
	
		
		
		$.get("svg-id.html",function(data){
			index = 0;
			for(var i = 0; file = svgContent[i]; i++) {
				html1 = $.parseHTML(data);
				html = $(html1).find('.editor');
				console.log(html);
				svg = $.parseHTML(svgText[i]);
				var viewBox ="";
				
				for(var d = 0; f = svg[d]; d++) {
					if(f.tagName == "svg"){
						viewBox = svg[d].attributes.viewBox.value;
					}
				}
				
				var titleSvg =  '<?xml version="1.0" encoding="iso-8859-1"?>\n'+
								'<!-- ADA FONT Generator 1.1.0, SVG Version: 1.00 Build 0)  -->\n'+
								'<svg ada="' + file.name.split('.')[0] + '" version="1.0" ada="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" '+
								'viewBox="' + viewBox + '">\n'+
								'</svg>';
								
								

				
				
				//Красим элементы
				var element = $(svg).find('path, circle');
				for(var s = 0; f = element[s]; s++) {
					$(element[s]).attr("style", "fill:" + colorElement[s]);
					$(element[s]).attr("ada", "element");
					$(element[s]).attr("ada-id", "element-" + s);
					var elementSvg = '<div class="svg-element col-md-6"><label ada-id="svg-' + s +'" class="svg-check-element"><input class="display-none" id="' + file.name.split('.')[0] + '-' + s + '" ada-id="element-' + s + '" type="checkbox" name="vehicle1" value="Bike">' + (s + 1) + '# Element</label></div>';
				
					$(html).find('.element-list').append(elementSvg)
				}
				
				
				
				var svgHtml = $.parseHTML(titleSvg);
				for(var d = 0; f = svgHtml[d]; d++) {
					//console.log(svgHtml);
					if(f.tagName == "svg"){
						console.log(svgHtml[d]);
						console.log(element);
						for(var t = 0; f = element[t]; t++) {
							svgHtml[d].append(element[t]);
						}
					}
				}
				
				
				$(html).find('.icon-big').append(svgHtml);
				$(html).find('input#input-id')[0].attributes.value.value = file.name.split('.')[0];
				console.log(html);
				$("div.select-file").append(html[0].outerHTML);
					
					
				
				
				
			}
			
		});
}





//Выдиление элементов!
$(document).on('click', '.svg-check-element input, .icon-big [ada="element"]', function() {
	
	if($(this).attr("ada") == "element") {
		$(this).parents('form').find('.element-list input[ada-id="' + $(this).attr("ada-id") + '"]')[0].checked = !$(this).parents('form').find('.element-list input[ada-id="' + $(this).attr("ada-id") + '"]')[0].checked;
	}
	console.log($(this).attr("ada-id"));
	console.log($(this).parents('form'));
	console.log($(this).parents('form').find('.element-list input[ada-id="' + $(this).attr("ada-id") + '"]')[0].checked);
	if($(this).parents('form').find('.element-list input[ada-id="' + $(this).attr("ada-id") + '"]')[0].checked) {
		$(this).parents('form').find('.element-list input[ada-id="' + $(this).attr("ada-id") + '"]').parents("div.svg-element").css('background-color', "#a2abf1");
		$(this).parents('form').find('.icon-big svg [ada-id="' + $(this).attr("ada-id") + '"]').css('fill', "#0027ff");
	} else {
		$(this).parents('form').find('.element-list input[ada-id="' + $(this).attr("ada-id") + '"]').parents("div.svg-element").css('background-color', "#aee6bb");
		$(this).parents('form').find('.icon-big svg [ada-id="' + $(this).attr("ada-id") + '"]').css('fill', colorElement[$(this).attr("ada-id").split('-')[1]]);

	}
	
});



//Выдиление элементов в блоке
$(document).on('click', '.svg-check-block input', function() {
//$(".svg-check-block input").click(function(){
	if($(this)[0].checked) {
		$(this).parent().parent("div.svg-element").css('background-color', "#e88891");
	} else {
		//console.log($(this).parent().parent("div.card"));
		$(this).parent().parent("div.svg-element").css('background-color', "#aee6bb");
	}
});


//Выдиления блока
$(document).on('click', 'div.block-name', function() {
//$("div.block-name").click(function(){
	var element = $(this).parent().find("input");
	for(var i = 0; i < element.length; i++) {
		$(this).parent().find("input")[i].checked = false;
	}
	
	if($(this)[0].checked) {
		$(this).parent().find("input").parent().parent("div.svg-element").css('background-color', "#a2abf1");
	} else {
		//console.log($(this).parent().parent("div.card"));
		$(this).parent().find("input").parent().parent("div.svg-element").css('background-color', "#aee6bb");
	}
	
	
});



//Изменить ------------------------------------------------------
$(document).on('html', 'div.icon-big svg', function() {
//$("div.icon-big svg").html(function(){
	$(this).css('border', "solid 2px #ff0000");
		
});

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}


function AddNewBlock(e) {
	console.log(e);
}


function AddActivBlock(e) {
	console.log(e);
}



















