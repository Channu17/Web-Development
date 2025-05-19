import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim : true,
        minLength : 2,  
    },
    price:{
        type : Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    currency:{
        type:String,
        enum: ['USD','EUR', "RUP" ]
    },
    Frequency:{
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
        required: [true, "Frequency is required"],
    },
    category:{
        type: String,
        enum: ['entertainment', 'food', 'utilities', 'transportation', 'health', 'other'],
        required: [true, "Category is required"],
    },
    payamentMethod:{
        type:String,
        required: [true, "payement method is required"],
        trim: true,
    },
    status:{
        type: String,
        enum:['active', "cancelled", "expired"],
        default: "active",
    },
    startDate:{
        type: Date,
        required: [true, "Start date is required"],
        validate:{
            validator: (value) => value <= new Date(),
            message: "start date must be in the past",
        }
    },
    renewalDate:{
        type: Date,
        required: [true, "End date is required"],
        validate:{
            validator: function (value) {
                return value > this.startDate;
        }, 
        message: "End date must be after start date",
        }
    },
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: [true, "User is required"],
            index: true,
    }

},{timestamps: true});


subscriptionSchema.pre("save", function(next){
    if (!this.enewelDate){
        const renewalPeriods  = {
            daily : 1, 
            weekly : 7,
            monthly : 30,
            yearly : 365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.startDate.getDate() + renewalPeriods[this.Frequency]);
    }
    if (this.renewalDate < new Date()){
        this.status = "expired";
    }
    next();
});

const subscription = mongoose.model("Subscription", subscriptionSchema);

export default subscription;