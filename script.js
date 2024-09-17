while (true) {
    
    let name = prompt('Введите имя').trim();

   
    if (name.toLowerCase() === 'константин') {

        alert('Прикольное имя');

        let number = +prompt('Введите секретный пароль');

        
        if (number === 7777) {

            alert('Я запомнил');

            let acc = +prompt('Сколько снять');

            
            if (acc === 10000) {
                alert('Пока карту себе заберу');
                break;  
            } else {
                alert('У тебя в мозгу дырка');
                
            }
        } else {
            alert('Ну ты и болван');
            
        }
    } else {
        alert('Ах ты мошейник!!');
        
    }
}
