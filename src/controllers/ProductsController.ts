import { error } from "console"
import { Request, Response} from "express"
import { AppError } from "../utils/AppError"

class ProductsController {
    /*
    * index - GET para listar varios registros
    * show - GET para exibir um registro especifico
    * create - POST para criar um registro
    * update - PATCH para atualizar um registro
    * delete - DELETE para deletar um registro
    */

    index(request: Request, response: Response){
         const { page, limit} = request.query
        
            response.send(`Página ${page} de ${limit}`)
    }

    create(request: Request, response: Response){
        const { name, price } = request.body  

        if(!name){
            throw new AppError("Nome do produto é obrigatorio!")
        }
        if(!price){
            throw new AppError("Preço do produto é obrigatorio!")
        }


        //throw new Error( "Erro ao tentar criar um produto" )
        //throw new AppError("Erro ao tentar criar um produto!")

    response.status(201).json({ name, price, user_id: request.user_id })
    }

}

export { ProductsController}