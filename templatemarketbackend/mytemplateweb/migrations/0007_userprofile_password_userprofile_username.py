# Generated by Django 4.2.3 on 2023-07-22 12:24

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("mytemplateweb", "0006_userprofile_email"),
    ]

    operations = [
        migrations.AddField(
            model_name="userprofile",
            name="password",
            field=models.CharField(default="", max_length=100),
        ),
        migrations.AddField(
            model_name="userprofile",
            name="username",
            field=models.CharField(default="", max_length=100, unique=True),
        ),
    ]
