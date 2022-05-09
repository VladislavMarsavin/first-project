import { Component } from "react";
import chek from './chek.jpg';

export class GroceryList extends Component {

    constructor() {
        super()
        this.state= {
            userInput:"",
            //    отвечает за отслеживание изменения состояния текста

            groceryList: []
            //    как только пользователь что-то  пишет, добавляется в массив
        
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        /*приравниваем и меняем userInput на то, что пишет пользователь (е)*/
    }


    addItem(vvod) {
        if (vvod === '') {
            alert ('введите значение')
        }

        else {

        let listArray = this.state.groceryList;
        // добавление массива
        listArray.push(vvod);
        // добавление текста в массив через метод push
        this.setState( {groceryList: listArray, userInput: ""} )
        //добавление в массив и опустошение ячейки
    }

    }

    noWord(e) {
        const li = e.target;
        //как только с li будет что-то происходить, мы будем это отслеживать
        li.classList.toggle('word')
        //на li добавляем название класса, с помощью него происходит зачеркивание (toggle - добавляет класс если его нет  и убирает класс если он есть)
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormMy(e) {
        e.preventDefault();
        // для добавления работы кнопки Энтер (строка с тегом form)
    }




    render() {
        return(
            <div>

                <form onSubmit={this.onFormMy}>

                <div className="container">
                    <input 
                    type="text" 
                    placeholder="Что Вы хотите купить?" 
                    onChange={ (e) => {this.onChangeEvent(e.target.value)} } 
                    //      onChange - подслушка, что пишет пользователь
                    //      event.target.value  - то что позволяет получить доступ, видеть, что пишет пользователь
                    value={this.state.userInput}
                    //      доступ к тому, что написал пользователь
                    />
                </div>

                <div className="container">
                    <button className="btn add" onClick={ () => this.addItem(this.state.userInput)}
                    //this.addItem - при клике добавляется новый элемент
                    >
                    ADD
                    </button>
                </div>

                <ul>
                    {this.state.groceryList.map( (item, index) => (
                        <li onClick={this.noWord}  key={index}>
                        <img src={chek} alt="foto" width="40px" /> {item}
                        </li>
                        //this.state.groceryList - доступ к элементам, которые добавляются в список
                        //.map - это функция, доступ к каждому элементу, item, index - аргументы функции
                        //index и key=index для устранения ошибки и присваивания уникального ключа
                    )
                    )}
                </ul>

                <div className="container">
                    <button className="btn delete" onClick={ () => this.deleteItem()}
                    //this.delItem - при клике удаляется элемент
                    >
                    DELETE
                    </button>
                </div>

                </form>


            </div>
        )
    }

}

