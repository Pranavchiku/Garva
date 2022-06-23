from django.core.mail import send_mail
from django.conf import settings
import string
import random

# Returns a random alphanumeric string of length 'length'


def random_string(letter_count, digit_count):
    str1 = ''.join((random.choice(string.ascii_letters)
                   for x in range(letter_count)))
    str1 += ''.join((random.choice(string.digits) for x in range(digit_count)))

    sam_list = list(str1)  # it converts the string to list.
    # It uses a random.shuffle() function to shuffle the string.
    random.shuffle(sam_list)
    final_string = ''.join(sam_list)
    return final_string


def sendCodeInEmail(email, code, poetry, article):
    fromUser = "Board of Literary Affairs"
    subject = "Submission Code for Garva"

    if poetry and not article:
        message = f"Your submission code for the event 'Poetry' is {code}. You can make your submission only once. Please do not share this code with anyone."
    elif article and not poetry:
        message = f"Your submission code for the event 'Article Writing' is {code}. You can make your submission only once. Please do not share this code with anyone."
    elif poetry and article:
        message = f"Your submission code for the events 'Poetry' and 'Article Writing' is {code}. You can make your submission only once per event. Please do not share this code with anyone."

    to_email = email

    send_mail(subject, message, fromUser, [to_email], fail_silently=False)
