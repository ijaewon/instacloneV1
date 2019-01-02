# Generated by Django 2.0.9 on 2019-01-02 21:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('images', '0007_image_tags'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notification_type', models.CharField(choices=[('like', 'Like'), ('comment', 'Comment'), ('follow', 'Follow')], max_length=20)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='creator', to=settings.AUTH_USER_MODEL)),
                ('image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='images.Image')),
                ('to', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='to', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
