import React from "react"
import { create } from "react-test-renderer"
import StatusProfile from "./StatusProfile"

describe("StatusProfile component", ()=>{
    test("status from props should be in the state", ()=>{
        //create виртуально создаст компоненту
        //ко всем элементам из state нужно обращаться через props
      const component = create(<StatusProfile status="first project" />)
      //getInstance() дает экземпляр компоненты
      //только в классовой компоненете
      //getInstance() дает все что есть в компоненте
      const instatns = component.getInstance()
      expect(instatns.props.status).toBe("first project")  
    })
    test("<span> in component", ()=>{
        const component = create(<StatusProfile status="first project" />)
        //root возвращает экземпляр который тестируем, с его DOM элементами
        const root = component.root
        //findByType() -находит единственный вложенный тестовый экземпляр
        // с указанным типом
        //findByType() -сгенерирует ошибку, если тестовых экземпляров с указанным
        //type не найдено или найдено больше одного.
        const span = root.findByType("span")
        expect(span.children.length).toBe(1)  
      })
      test("<span> in component", ()=>{
        const component = create(<StatusProfile status="first project" />)
        //root возвращает экземпляр который тестируем, с его DOM элементами
        const root = component.root
        //findByType() -находит единственный вложенный тестовый экземпляр
        // с указанным типом
        //findByType() -сгенерирует ошибку, если тестовых экземпляров с указанным
        //type не найдено или найдено больше одного.
        const span = root.findByType("span")
        expect(span.props.children).toBe('first project')  
      })
      test("<span> should be displayed", ()=>{
        const component = create(<StatusProfile status="first project" />)
        //root возвращает экземпляр который тестируем, с его DOM элементами
        const root = component.root
        //findByType() -находит единственный вложенный тестовый экземпляр
        // с указанным типом
        //findByType() -сгенерирует ошибку, если тестовых экземпляров с указанным
        //type не найдено или найдено больше одного.
        const span = root.findByType("span")
        //not - не
        //toBeNull() - равняется Null
        //Вместе - не равняется Null
        expect(span).not.toBeNull()
      })
      test("<input> shouldn't be displayed", ()=>{
        const component = create(<StatusProfile status="first project" />)
        //root возвращает экземпляр который тестируем, с его DOM элементами
        const root = component.root
        // если нужно кинуть ошибку или проверить элемента кторого нет
        // делаем так
        expect(()=>{
            const span = root.findByType("input")
        }).toThrow()
      })
      test("<input> should be displayed in editMode instead of span", ()=>{
          //editStatus в него передаем callback что бы тест работал
        const component = create(<StatusProfile status="first project" editStatus={()=>{}}/>)
        //root возвращает экземпляр который тестируем, с его DOM элементами
        const root = component.root
        //findByType() -находит единственный вложенный тестовый экземпляр
        // с указанным типом
        //findByType() -сгенерирует ошибку, если тестовых экземпляров с указанным
        //type не найдено или найдено больше одного.
        const span = root.findByType("span")
        //генерируем событие onClick достовая его из props
        span.props.onClick()
        const input = root.findByType("input")
        expect(input.props.value).toBe("first project")
      })
      test("editStatus should be called", ()=>{
      // шпионская функция, что бы тест мог отслеживать были ли вызвана функция    
      const mockCallback = jest.fn()  
      //editStatus в него передаем callback что бы тест работал
      const component = create(<StatusProfile status="first project" editStatus={mockCallback}/>)
      //getInstance() дает экземпляр компоненты
      //только в классовой компоненете
      //getInstance() дает все что есть в компоненте
      const instance = component.getInstance()
      // вызываем внутринюю функцию компоненты
      // в ней находиться функция editStatus
      instance.changeEditMode()
      expect(mockCallback.mock.calls.length).toBe(1)
    })
})