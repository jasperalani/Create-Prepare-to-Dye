import crafttweaker.api.item.IItemStack;
import crafttweaker.api.util.text.MCTextComponent;
import stdlib.List;

public expand string[IItemStack]{
    public addTips() as string[IItemStack]{
        for key in this{
            key.addTip(this[key]);
        }
        return this;
    }
}

public expand string{
    public printMe() as string{
        print(this);
        return this;
    }
    public red() as string{
        return "\u00A7c"+this+"\u00A7f";
    }
    public highLight() as string{
        return red();
    }
    public tooltipHighLightColor() as string{
        return settings.tooltip_highLightColor + this + settings.tooltip_color;
    }
    public tooltipColor() as string{
        return settings.tooltip_color + this;
    }
    public tooltipPromptColor() as string{
        return settings.tooltip_prompt_color + this;
    }
    public wrapToList(max as int = 42) as List<string>{
        var locationInLine = 0;
        var output =new List<string>();
        var str as string = "";
        for character in this{
            locationInLine++;
            str+=character;
            if (locationInLine>=max && character==" "){
                output.add(str);
                str="";
                locationInLine=0;
            }
        }
        output.add(str);
        return output;
    }
    
    public wrap(max as int = 42) as string{
        var locationInLine = 0;
        var str as string = "";
        for character in this{
            locationInLine++;
            str+=character;
            if (locationInLine>=max && character==" "){
                str+="\n";
                locationInLine=0;
            }
        }
        return str;
    }
}
// public expand IItemStack[] {
//   public hide() as IItemStack[] {for item in this{item.hide();}return this;}
//   public remove() as IItemStack[] {for item in this{item.remove();}return this;}
// }
public expand List<MCTextComponent>{
    public contains(element as MCTextComponent) as bool{
        for e in this{
            print(e.formattedText);
            if e.formattedText == element.formattedText{
                return true;
            }
        }
        return false;
    }
}