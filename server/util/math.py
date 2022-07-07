from email.policy import default


def math(operator, int1, int2) -> int:
    '''
    Perform either multiplication, addition, or subtraction on two integers.
    Returns an integer.
    '''
    match operator:
        case "multiply":
            result = int(int1 * int2)
        case "add":
            result = int(int1 + int2)
        case "subtract":
            result = int(int1 - int2)
        case _:
            return None
    return result