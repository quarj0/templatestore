# Generated by Django 4.2.3 on 2023-07-22 12:13

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("mytemplateweb", "0003_remove_template_rating_template_seller_review_rating"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="userprofile",
            name="email",
        ),
        migrations.RemoveField(
            model_name="userprofile",
            name="password",
        ),
        migrations.RemoveField(
            model_name="userprofile",
            name="username",
        ),
    ]