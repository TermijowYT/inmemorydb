
export class InMemoryDB<T> {
    private data: Record<string, T>;
  
    constructor() {
      this.data = {};
    }
  
    public insert(key: string, value: T) {
      this.data[key] = value;
    }
  
    public get(key: string) {
      return this.data[key];
    }
  
    public delete(key: string) {
      delete this.data[key];
    }
  
    public getAll() {
      return Object.values(this.data);
    }

    public getAllIds(key:string) {
        return {
            key : key,
            data : this.data,
        };
      }

    public clear() {
      this.data = {};
    }
    
  }