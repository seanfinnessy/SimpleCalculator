from email.policy import default


def math(operator, int1, int2) -> int:
    '''
    Perform either multiplication, addition, or subtraction on two integers.
    Returns an integer.
    '''
    match operator:
        case "x":
            result = int(int1 * int2)
        case "+":
            result = int(int1 + int2)
        case "-":
            result = int(int1 - int2)
        case _:
            return None
    return result