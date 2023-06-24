import { Request, Response } from "express";
import { CreateRole } from "../useCases/create-role";

export class RoleController {
  /**
   *
   */
  constructor(private createRole: CreateRole) {
    
  }
  
  async post(req: Request, res: Response) {
    try {
      const { description } = req.body
      
      const role = await this.createRole.execute({ description })

      res.json(role)
    } catch (error) {
      console.log(error)
      res.json(error)
    }
  }
}