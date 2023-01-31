
class GenericMethods
{
     //GenericMethods()

        getElementName(element) 
        {
            for (const key in this.elements) 
            {
            if (this.elements[key] === element) 
            {
                return key;
            }
            }
            return 'Element not found';
        }

        makeid(length) 
        {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) 
            {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        // getAlphaNumericString(n)
        // {

        //     // chose a Character random from this String
        //     AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        //             + "0123456789"
        //             + "abcdefghijklmnopqrstuvxyz";

        //     // create StringBuffer size of AlphaNumericString
        //     sb = new StringBuilder(n);

        //     for (i = 0; i < n; i++) {

        //         // generate a random number between
        //         // 0 to AlphaNumericString variable length
        //         index = AlphaNumericString.length() * Math.random();
        //         //index = (int)(AlphaNumericString.length() * Math.random());

        //         // add Character one by one in end of sb
        //         sb.append(AlphaNumericString.charAt(index));
        //     }

        //     return sb.toString();
        // }
    
}

export const genericMethods = new GenericMethods();