class Expense {
    constructor(id, detail, date, amount, category) {
        this.id = id;
        this.detail = detail;
        this.date = date;
        this.amount = amount;
        this.category = category;
    }
}
class VehicalManager {
    expenses = [];
    getData() {
        if (localStorage.getItem("all") != undefined)
            this.expenses = JSON.parse(localStorage.getItem("all"));
    }
    addNewVehical = (ex) => {
        this.getData();
        this.expenses.push(ex);
        localStorage.setItem("all", JSON.stringify(this.expenses));
    };
    getAllVehical = () => {
        this.getData();
        return this.expenses;
    }
    //Do the rest of the APIs
    updateVehical = (id, ex) => {
        const index = this.expenses.findIndex((e) => e.id == id)
        if (index == -1)
            throw "Expense not found to update";
        this.expenses.splice(index, 1, ex);
        localStorage.setItem("all", JSON.stringify(this.expenses))
    }
    getStringDate(dt) {
        return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
    }
    findExpenseByDate(dt) {
        this.getData();
        return this.expenses.filter((e) => this.getStringDate(dt) == this.getStringDate(new Date(e.date)));
    }
    findVehicalByCategory(cat) {
        this.getData();
        return this.expenses.filter((e) => e.category == cat);
    }
    findtotal() {
        for(rec in this.expenses){
            sum+=rec.amount;
        }
        return sum;
    }
}

