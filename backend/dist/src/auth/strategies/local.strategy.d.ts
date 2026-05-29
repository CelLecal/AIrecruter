import { AuthService } from '../auth.service';
declare const localStrategy_base: new (...args: any) => any;
export declare class localStrategy extends localStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<any>;
}
export {};
