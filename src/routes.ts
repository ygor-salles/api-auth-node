import { Request, Response, Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hellow world' });
});

const userController = new UserController();

router.post('/users', userController.create);
router.get('/users', userController.read);
router.get('/users/:id', userController.readById);
router.delete('/users/:id', userController.deleteById);
router.put('/users/:id', userController.updateById);

export { router };
