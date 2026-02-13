import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)


def generate_tasks(goal, users, constraints, app_type):

    try:

        prompt = f"""
You are a senior software architect.

Convert the following feature spec into:

1. User stories
2. Engineering tasks grouped into frontend, backend, database, infrastructure.

Goal: {goal}
Users: {users}
Constraints: {constraints}
Type: {app_type}
"""

        completion = client.chat.completions.create(
            model="openrouter/auto",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )

        return completion.choices[0].message.content

    except Exception as e:
        print("ERROR:", str(e))
        return str(e)