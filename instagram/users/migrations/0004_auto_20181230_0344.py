# Generated by Django 2.0.9 on 2018-12-29 18:44

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20181230_0254'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='follosing',
        ),
        migrations.AddField(
            model_name='user',
            name='following',
            field=models.ManyToManyField(blank=True, related_name='_user_following_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
